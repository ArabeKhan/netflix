import React from 'react'
import BrowseContainer from '../containers/browse'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selectionFilter'


export default function Browse() {
    //we need series and films
    const { series } = useContent('series')
    const { films } = useContent('films')


    //we need slides
    const slides = selectionFilter({ series, films })



    //we need pass to the browse container

    return (
        <>
            <BrowseContainer slides={slides} />
        </>
    )
}
