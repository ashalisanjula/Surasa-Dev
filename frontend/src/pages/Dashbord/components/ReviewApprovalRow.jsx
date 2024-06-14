import React from 'react';

function ReviewApprovalRow({ name, review }) {
  return (
    <tr className="border-b">
      <td className="py-3 px-4 text-left">{name.name}</td>
      <td className="py-3 px-4 text-left">{name.review}</td>
      <td className="py-3 px-4 text-left">
      <button
          className="bg-[#F0C903] hover:bg-[#d6b302] text-white font-bold py-1 px-2 rounded mr-2"
          onClick={() => onAccept(name.id)}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => onDecline(name.id)}
        >
          Decline
        </button>
      </td>
    </tr>
  );
}

export default ReviewApprovalRow;