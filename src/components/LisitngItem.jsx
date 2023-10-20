import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import {ReactComponent as EditIcon} from '../assets/svg/editIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function LisitngItem({listing, id, onDelete, onEdit}) {
    console.log(listing.offer)
  return (
    <div>
      <li className="categoryListing">
        <Link className='categoryListingLink' to={`/category/${listing.type}/${id}`}>
            <img 
            src={listing.imageUrls[0]} 
            alt ={listing.name} 
            className='categoryListingImg'
            />
            <div className="categoryListingDetails">
                <p className="categoryListingLocation">
                    {listing.location}
                </p>
                <p className="categoryListingName">{listing.name}</p>
                <p className="categoryListingPrice">
                    ${listing.offer ? listing.discountedPrice : listing.regularPrice}
                    {listing.type === 'rent' && ' / Month'}
                </p>
                <div className="categoryListingInfoDiv">
                    <img src={bedIcon} alt="bed" />
                    <p className="categoryListingInfoText">
                        {listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}
                    </p>
                    <img src={bathtubIcon} alt="bathtub" />
                    <p className="categoryListingInfoText">
                    {listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : '1 Bathrooms'}
                    </p>
                </div>
            </div>
        </Link>
        {onDelete && (
            <DeleteIcon className='removeIcon' fill='rgb(231,76,60)' onClick={()=> onDelete(listing.id,listing.name)}/>
        )}
        {onEdit && <EditIcon className='editIcon' onClick={()=> onEdit(id)}/>}
      </li>
    </div>
  )
}

export default LisitngItem
