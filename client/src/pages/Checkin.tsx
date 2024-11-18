import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import axiosInstance from "../libs/axios";

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 50px 50px;
`;

const RatingLabel = styled.label`
  font-size: 24px;
  margin-right: 50px;
`;

const Rating = styled.input.attrs({ type: 'radio' })`
  margin: 0 10px;
`;

const RatingOptionLabel = styled.label`
  display: inline-block;
  margin: 0 10px;
`;
const Comment = styled.textarea`
  padding: 50px;
  width: 400px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Checkin = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>();

  const onRatingSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(+event.target.value);
  };  
  const onCommentUpdate = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value);
  };

  const onSubmit = () => {
    axiosInstance.post("/checkin", {
      comment,
      rating,
    });
  };

  return (
    <Container>
<RatingWrapper>
      <RatingLabel>Mood Rating</RatingLabel>
      {[1, 2, 3, 4, 5].map((value) => (
        <RatingOptionLabel key={value}>
          {value}
          <Rating name="rating" value={value} checked={rating === value} onChange={onRatingSelect} />
        </RatingOptionLabel>
      ))}
    </RatingWrapper>      
      <Comment
        aria-label="comment-box"
        placeholder="Note down any comments on your mood that come to mind"
        onChange={onCommentUpdate}
      >
        {comment}
      </Comment>
      <Button aria-label="submit-button" disabled={rating === null} onClick={onSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default Checkin;
