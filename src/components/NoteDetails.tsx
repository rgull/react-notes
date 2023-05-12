import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../services/noteService";
import { Note } from "../interfaces/interface";

const NoteDetails: React.FC<any> = () => {
  const navigation = useNavigate();
  const [noteDetails, setNoteDetails] = useState<Note | null>(null);
  const [id, setId] = useState<number | null>(null);
  const { id: noteIdParam } = useParams<{ id: string }>();

  const fetchDetail = async () => {
    try {
      const res = await getNote(id!);
      setNoteDetails(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackClick = () => {
    navigation("/");
  };

  useEffect(() => {
    setId(Number(noteIdParam));
  }, [noteIdParam]);

  useEffect(() => {
    if (id) {
      fetchDetail();
    }
  }, [id]);

  return (
    <>
      <button onClick={handleBackClick}>
        <FaArrowLeft /> Back
      </button>
      <div>
        <h2>Note Details</h2>
        <p>Title: {noteDetails?.title}</p>
        <p>Body: {noteDetails?.body}</p>
      </div>
    </>
  );
};

export default NoteDetails;
