import React, { useState } from "react";
import styled from "styled-components";

const MoodWrapper = styled.fieldset`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  border: 0px;
`;

const MoodWrapperLabel = styled.legend`
  font-size: 24px;
  margin-right: 50px;
`;

const MoodItems = styled.ul`
  padding-inline-start: 0px;
`;

const MoodItemWrapper = styled.li`
  display: block;
`;

const MoodLabel = styled.label`
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
  const [moods, setMoods] = useState<{ string: boolean } | {}>({});
  const [comment, setComment] = useState<string>();

  const moodOptions: string[] = [
    "Happy",
    "Sad",
    "Stressed",
    "Angry",
    "Anxious",
    "Focused",
  ];

  const onMoodSelect = (e: React.FormEvent<HTMLInputElement>) => {
    setMoods({
      ...moods,
      [e.currentTarget.name.toLowerCase()]: e.currentTarget.checked,
    });
  };
  const onCommentUpdate = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value);
  };

  return (
    <Container>
      <h1>Check in</h1>
      <MoodWrapper>
        <MoodWrapperLabel>Mood</MoodWrapperLabel>
        <MoodItems>
          {moodOptions.map((value) => (
            <MoodItemWrapper key={value.toLowerCase()}>
              <input
                type='checkbox'
                id={value.toLowerCase()}
                name={value.toLowerCase()}
                onChange={onMoodSelect}
              />
              <MoodLabel htmlFor={value.toLowerCase()}>{value}</MoodLabel>
            </MoodItemWrapper>
          ))}
        </MoodItems>
      </MoodWrapper>
      <Comment
        aria-label='comment-box'
        placeholder='Note down any comments on your mood that come to mind'
        onChange={onCommentUpdate}
      >
        {comment}
      </Comment>
      <Button aria-label='submit-button' disabled={!comment}>
        Submit
      </Button>
    </Container>
  );
};

export default Checkin;
