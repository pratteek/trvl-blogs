import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='https://images.unsplash.com/photo-1561016696-094e2baeab5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyZmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='https://images.unsplash.com/photo-1576363399501-0dd08fc750e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                        
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default Cards;
