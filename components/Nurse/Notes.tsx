"use client";

import React from 'react';

type Note = {
  title: string;
  content: string;
  date: string;
};

type NotesProps = {
  notes: Note[];
};

const Notes = ({ notes }: NotesProps) => {
  if (!notes || notes.length === 0) {
    return <div className="bg-white p-4 rounded-lg shadow-lg h-full">No notes available</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg h-full" role="region" aria-labelledby="notes-header">
      <h2 id="notes-header" className="text-xl font-semibold mb-4">Notes</h2>
      <div className="space-y-4">
        {notes.map((note, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">{note.title}</h3>
            <p className="text-gray-600">{note.content}</p>
            <p className="text-gray-400 text-sm">{note.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
