import React, { useState } from "react";
import { FaArrowUp, FaArrowDown, FaPaperPlane, FaTrash } from "react-icons/fa";
import { generateInitials } from './utils'; // Import the utility function
import { CommentProps } from '@/types/types'; // Import CommentProps

interface CommentSectionProps {
  comments: CommentProps[];
  postId: string;
  onAddComment: (postId: string, comment: string, parentCommentId?: string) => Promise<void>;
  onDeleteComment: (postId: string, commentIndex: number, parentCommentId?: string) => void;
  parentCommentId?: string;
  currentUser: string; // Added currentUser prop
}

const MAX_COMMENT_LENGTH = 2000;

const CommentSection: React.FC<CommentSectionProps> = ({ comments, postId, onAddComment, onDeleteComment, parentCommentId, currentUser }) => {
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState<number[]>(comments.map(() => 0));
  const [dislikes, setDislikes] = useState<number[]>(comments.map(() => 0));
  const [showReplyInput, setShowReplyInput] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddComment = async () => {
    if (newComment.trim().length === 0) {
      setError("Comment cannot be empty.");
      return;
    }
    if (newComment.length > MAX_COMMENT_LENGTH) {
      setError(`Comment cannot exceed ${MAX_COMMENT_LENGTH} characters.`);
      return;
    }
    setIsSubmitting(true);
    try {
      await onAddComment(postId, newComment.trim(), parentCommentId);
      setNewComment("");
      setError(null);
    } catch (error) {
      setError("Failed to add comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  const handleDislike = (index: number) => {
    const newDislikes = [...dislikes];
    newDislikes[index]++;
    setDislikes(newDislikes);
  };

  const toggleReplyInput = (commentId: string) => {
    setShowReplyInput(prevState => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mt-4" aria-label="Comment Section">
      <div className="flex flex-col mb-2">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          aria-label="Add a comment"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "comment-error" : undefined}
          disabled={isSubmitting}
          rows={3}
        />
        {error && <p id="comment-error" className="text-red-500 mb-2">{error}</p>}
        <button onClick={handleAddComment} className="self-end p-2 bg-green-500 text-white rounded-full" aria-label="Submit comment" disabled={isSubmitting}>
          <FaPaperPlane className="text-xl" />
        </button>
      </div>
      <label className="block text-gray-700 mb-2">Sort by:</label>
      <select className="p-2 border border-gray-300 rounded-lg mb-4" aria-label="Sort comments">
        <option value="top">Top</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start space-x-4 mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm" aria-label={`Comment by ${comment.username}`}>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold text-gray-700">
              {generateInitials(comment.username)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{comment.username}</span>
                <div className="flex items-center space-x-2">
                  <button onClick={() => handleLike(index)} className="flex items-center space-x-1 text-gray-500 hover:text-green-500" aria-label="Upvote comment">
                    <FaArrowUp /> <span>{likes[index]}</span>
                  </button>
                  <button onClick={() => handleDislike(index)} className="flex items-center space-x-1 text-gray-500 hover:text-red-500" aria-label="Downvote comment">
                    <FaArrowDown /> <span>{dislikes[index]}</span>
                  </button>
                  <button onClick={() => toggleReplyInput(index.toString())} className="text-blue-500 hover:underline" aria-label="Reply to comment">
                    Reply
                  </button>
                  {currentUser === comment.username && (
                    <button onClick={() => onDeleteComment(postId, index, parentCommentId)} className="text-red-500 hover:underline" aria-label="Delete comment">
                      <FaTrash />
                    </button>
                  )}
                </div>
              </div>
              <p>{comment.comment}</p>
              {showReplyInput[index.toString()] && (
                <CommentSection
                  comments={[]}
                  postId={postId}
                  onAddComment={onAddComment}
                  onDeleteComment={onDeleteComment}
                  parentCommentId={index.toString()}
                  currentUser={currentUser} // Pass currentUser to nested CommentSection
                />
              )}
              {comment.replies && (
                <div className="ml-10">
                  <CommentSection
                    comments={comment.replies}
                    postId={postId}
                    onAddComment={onAddComment}
                    onDeleteComment={onDeleteComment}
                    parentCommentId={index.toString()}
                    currentUser={currentUser} // Pass currentUser to nested CommentSection
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
