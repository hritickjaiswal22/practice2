// Around 47 mins

import { useState } from "react";
import "./App.css";

function guidGenerator() {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

interface Comment {
  id: string;
  text: string;
  subComments: Array<Comment>;
}

interface CommentsPropTypes {
  comments: Array<Comment>;
  addComment: (id: string, text: string) => void;
}

function Comments({ comments, addComment }: CommentsPropTypes) {
  function submitHandler(e: any, id: string) {
    e.preventDefault();
    addComment(id, e.target[0].value);
    e.target[0].value = "";
  }

  return (
    <>
      {comments.map((comment) => (
        <div className="commentMaster" key={comment.id}>
          <div className="comment">{comment.text}</div>

          <div>
            <form onSubmit={(e) => submitHandler(e, comment.id)}>
              <input type="text" />
              <button type="submit">Submit</button>
            </form>
          </div>

          {comment.subComments.length ? (
            <div className="subCommentsContainer">
              <Comments
                comments={comment.subComments}
                addComment={addComment}
              />
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

function App() {
  const [comments, setComments] = useState<Array<Comment>>([
    {
      id: "1",
      text: "HelloWorld1",
      subComments: [
        {
          id: "4",
          text: "HelloWorld2",
          subComments: [],
        },
        {
          id: "5",
          text: "HelloWorld3",
          subComments: [],
        },
      ],
    },
    {
      id: "2",
      text: "Hello",
      subComments: [],
    },
    {
      id: "3",
      text: "World",
      subComments: [],
    },
  ]);

  function createNewCommentsState(
    comments: Array<Comment>,
    id: string,
    newComment: string
  ) {
    if (comments.length === 0) return [];

    const result = [];

    for (const comment of comments) {
      const temp: Comment = {
        id: comment.id,
        subComments: [],
        text: comment.text,
      };

      temp.subComments = createNewCommentsState(
        comment.subComments,
        id,
        newComment
      );
      if (comment.id === id) {
        temp.subComments.push({
          id: guidGenerator(),
          subComments: [],
          text: newComment,
        });
      }

      result.push(temp);
    }

    return result;
  }

  function addComment(id: string, text: string) {
    console.log(id);
    console.log(text);

    setComments(createNewCommentsState(comments, id, text));
  }

  return (
    <main>
      <Comments comments={comments} addComment={addComment} />
    </main>
  );
}

export default App;
