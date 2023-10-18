import React from "react";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/dist/cjs/styles/prism";

import classes from "./screenComputer.module.css";

const ScreenComputer = () => {
  const markdown = `
  ~~~js
  import React from 'react';

interface TodoListProps {
  items: {id: string, text: string}[];
};

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
  ~~~
  `;
  return (
    <div className={classes.container}>
      <Markdown
        // eslint-disable-next-line react/no-children-prop
        children={markdown}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, "")}
                style={light}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default ScreenComputer;
