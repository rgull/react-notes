import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../services/noteService';

interface Note {
    id: number;
    title: string;
    body: string;
}

interface NoteDetailsProps {
    noteId: number;
}

const NoteDetails: React.FC<any> = () => {
    const [noteDetails, setNoteDetails] = useState<any>([]);
    const [id, setId] = useState<any>('');
    const params = useParams()

    const fetchDetail = async () => {
         setId(params.id);
        // const res = getNote(id).then((res:any)=>{
        //     setNoteDetails(res);
        // })
   
    }

    useEffect(() => {
        setId(params.id);
        // Make the API call to fetch the specific note details based on the noteId
        // You can replace the `fetchNoteDetails` function with your own API call
        const res = fetchDetail()
        console.log("rew",res)

        // if (res) {
            
        // }


    }, []);


    return (
        <div>
            <h2>Note Details</h2>
            <p>Title: {noteDetails?.title}</p>
            <p>Body: {noteDetails?.body}</p>
            {/* Additional note details */}
        </div>
    );
};

export default NoteDetails;
