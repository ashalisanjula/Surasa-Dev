import React, { useState } from 'react';

function ReviewApproval() {
  const [reviews, setReviews] = useState([
    { id: 1, reviewer: 'John Doe', comment: 'Great service!', status: 'Pending', stars: 4 },
    { id: 2, reviewer: 'Jane Smith', comment: 'Fast delivery!', status: 'Pending', stars:3 }
  ]);

  const handleApprove = (id) => {
    setReviews(reviews.map(review => review.id === id ? { ...review, status: 'Approved' } : review));
  };

  const handleReject = (id) => {
    setReviews(reviews.map(review => review.id === id ? { ...review, status: 'Rejected' } : review));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Reviewer</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Comment</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Status</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Number of stars</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {reviews.map(review => (
              <tr key={review.id} className="border-b">
                <td className="py-3 px-4 text-left">{review.reviewer}</td>
                <td className="py-3 px-4 text-left">{review.comment}</td>
                <td className="py-3 px-4 text-left">{review.status}</td>
                <td className="py-3 px-4 text-left">{review.stars}</td>
                <td className="py-3 px-4 text-left">
                  <button
                    className="bg-[#F0C903] hover:bg-[#d6b302] text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => handleApprove(review.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleReject(review.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReviewApproval;
