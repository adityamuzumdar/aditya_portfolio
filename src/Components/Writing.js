import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export default function Writing() {
    return (
        <div>
            <h1 className="font-semibold text-2xl mb-4">Writing</h1>
            <div>
                <section className='py-5'>
                <Link to="/writing/w1" className="grid grid-cols-2 gap-4" >
                    <span className="text-black/50">2021-08-24</span>
                    <div className="flex flex-col">
                        <span className="text-black">The Dichotomy of Mumbai</span>
                        <p className="mt-2 font-serif text-black/70 text-base">Writing about the city I love : Mumbai</p>
                    </div>
                </Link>
                
                </section>
                
            </div>
        </div>
    );
}

