'use client'

import React, { useEffect, useState } from 'react'
import data from '../utils/data/api'
import { PokemonData, PokemonDetail } from '@/utils/types/pokemonData';


function Pokemon({ pokemon }: {pokemon: PokemonData}) {
    const [details, setDetails] = useState<PokemonDetail>();

    useEffect(() => {
        function updateData() {
            data.getPokemon(pokemon.url).then((res) => {                
                const response: PokemonDetail = {
                    sprites: {
                        front_default: res.sprites.front_default
                    },
                    name: res.name,
                    height: res.height,
                    weight: res.weight,
                    type: res.type,
                    order: res.order
                };
                setDetails(response);
            })
        };
        updateData();
    }, []);

    return (
        <>        
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={details?.sprites.front_default}
                    alt="img failed load"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm">{details?.name}</h3>
                </div>
                <button>Details</button>
            </div>
        </>
    )
}

export default Pokemon