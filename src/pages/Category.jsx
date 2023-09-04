import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import{
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter
} from 'firebase/firestore'
import{db} from '../firebase.config'
import{toast} from 'react-toastify'
import Spinner from '../components/Spinner'

function Category() {
 const [listings, setListings] = useState(null)
 const[loading, setLoading] = useState(true)

 const params = useParams()

 useEffect(()=>{
  const fecthListings = async () =>{
    try {
      const listingsRef = collection(db,'listings')
      console.log(`listingsRef: ${listingsRef}`)
      // let listingsRefJson =JSON.stringify(listingsRef)
      //   console.log(`ListingRef : ${listingsRefJson}`)
      
      const q = query(
        listingsRef,
         where('type','==', params.categoryName),
         orderBy('timestamp', 'desc'),
         limit(10)
         )
        const querySnap = await getDocs(q)
        console.log(`querySnap: ${querySnap}`)
        //  let querySnapJson = JSON.stringify(querySnap)
      // console.log(`QuerySnap: ${querySnapJson.doc.data()}`)
        
       let listings =[]
        querySnap.forEach((doc)=>{
          return listings.push({
            id: doc.id,
            data: doc.data()
          })
        })
        setListings(listings)
        setLoading(false)
    } catch (error) {
      toast.error('Could not fetch listings')
    }
  }
  fecthListings()
 },[params.categoryName])

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === 'rent' 
          ? 'Places for rent'
          : 'Places for sale'}
        </p>
      </header>
      {loading ? <Spinner/> : listings && listings.length > 0 ?
      <>
      <main>
        <ul className='categoryListings'>
          {listings.map((listing)=>(
            <h3 key={listing.id}>{listing.data.name}</h3>
          ))}
        </ul>
      </main>
      </> : <p>No Listings for {params.categoryName}</p>}
    </div>
  )
}

export default Category
