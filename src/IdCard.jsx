import React from 'react';
import './idCard.css'; // Import CSS file
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";

const IdCard = ({id}) => {
  const { name, email, body } = id;

  return (
    <div className="id-card">
      
      <p><strong><FaUserTie size='1em'/></strong> {name}</p>
      <p><strong><MdEmail /></strong> {email}</p>
      <TfiCommentAlt />
      <p><strong></strong> {body}</p>

    </div>
  );
};

export default IdCard;
