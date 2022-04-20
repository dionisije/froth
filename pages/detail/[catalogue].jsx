import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Detail = () => {
    const router = useRouter()
    const { catalogue } = router.query;
    const example = [
        {"Name":"Largatija Nick","Artist":"Bauhaus","Album":"Froth 1 The Rabid Spume Mix","Time":"181","Disc":"1","Disc Count":"1","Track":"11","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Resurrection Joe","Artist":"The Cult","Album":"Froth 1 The Rabid Spume Mix","Time":"355","Disc":"1","Disc Count":"1","Track":"3","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Spirit Walker","Artist":"The Cult","Album":"Froth 1 The Rabid Spume Mix","Time":"214","Disc":"1","Disc Count":"1","Track":"8","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Love Like Blood (12\")","Artist":"Killing Joke","Album":"Froth 1 The Rabid Spume Mix","Time":"398","Disc":"1","Disc Count":"1","Track":"10","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Shot By Both Sides","Artist":"Magazine","Album":"Froth 1 The Rabid Spume Mix","Time":"235","Disc":"1","Disc Count":"1","Track":"5","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Lithium","Artist":"Nirvana","Album":"Froth 1 The Rabid Spume Mix","Time":"251","Disc":"1","Disc Count":"1","Track":"4","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Sheela Na Gig","Artist":"PJ Harvey","Album":"Froth 1 The Rabid Spume Mix","Time":"187","Disc":"1","Disc Count":"1","Track":"2","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Stella","Artist":"PJ Harvey","Album":"Froth 1 The Rabid Spume Mix","Time":"148","Disc":"1","Disc Count":"1","Track":"14","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Skin","Artist":"Siouxsie & The Banshees","Album":"Froth 1 The Rabid Spume Mix","Time":"215","Disc":"1","Disc Count":"1","Track":"6","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Jigsaw Feeling","Artist":"Siouxsie & The Banshees","Album":"Froth 1 The Rabid Spume Mix","Time":"275","Disc":"1","Disc Count":"1","Track":"13","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Refrigerator Car","Artist":"Spin Doctors","Album":"Froth 1 The Rabid Spume Mix","Time":"280","Disc":"1","Disc Count":"1","Track":"9","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Hanging Around","Artist":"The Stranglers","Album":"Froth 1 The Rabid Spume Mix","Time":"262","Disc":"1","Disc Count":"1","Track":"12","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"Out Of Control","Artist":"U2","Album":"Froth 1 The Rabid Spume Mix","Time":"247","Disc":"1","Disc Count":"1","Track":"7","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
        {"Name":"The Conqueror","Artist":"The Very Things","Album":"Froth 1 The Rabid Spume Mix","Time":"232","Disc":"1","Disc Count":"1","Track":"1","Track Count":"14","Year":"1993","Catalogue":"DVDCDR1","Order":"0.01","Comment":""},
    ];

    useEffect(() => {
    console.log('On startup');
    }, []);

    const getPageUri = direction => {
        const regEx = /\d/;
        const separator = regEx[Symbol.search](catalogue);
        const series = catalogue.substring(0, separator);
        const currentIndex = parseInt(catalogue.slice(separator), 10);
        if (direction === 'prev') {
            return `${series}${currentIndex - 1}`;
        } else if (direction === 'next') {
            return `${series}${currentIndex + 1}`;
        } else {
            return "#";
        }
    };

    return (
        <>
            <main className="w-100">
                <h2>{catalogue}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Artist</th>
                            <th scope="col">Title</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {example.map((song, index) => (
                            <tr key={song['Track']}>
                                <th scope="row">{index + 1}</th>
                                <td>{song['Artist']}</td>
                                <td>{song['Name']}</td>
                                <td>{`${Math.floor(song['Time'] / 60)}:${(song['Time'] % 60).toString().padStart(2, 0)}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <footer className="text-center container">
                <div className="mx-auto">
                    <Link href={`/detail/${getPageUri('prev')}`} passHref>
                        <button className="btn btn-lg btn-secondary col-3 me-2" type="button">Previous</button>
                    </Link>
                    <Link href="/" passHref>
                        <button className="btn btn-lg btn-primary col-3 me-2" type="button">Back</button>
                    </Link>
                    <Link href={`/detail/${getPageUri('next')}`} passHref>
                        <button className="btn btn-lg btn-secondary col-3 me-2" type="button">Next</button>
                    </Link>
                </div>
            </footer>
        </>
    );
}

export default Detail
