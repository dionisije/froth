import React from 'react';
import useRequestRest from '../hooks/useRequestRest';
import Album from './Album';

const Albums = () => {
    const {data: albumsData} = useRequestRest();
    console.log('ALBUMS', albumsData[0]);

    return (
        <main>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            albumsData.map(album => (
                                <div className="col" key={album.Catalogue}>
                                    <Album detail={album} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Albums;
