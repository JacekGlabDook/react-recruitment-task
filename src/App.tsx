import React from "react";
import { createServer } from "miragejs";

interface IEntry {
  text: string | null;
  subEntries: IEntry[];
  copyable: boolean;
  breaksIntoSpans: boolean;
}

const res = {
  text: "This is recursive entry",
  subEntries: [
    {
      text: "This is sub-entry containing additional sub-entries:",
      subEntries: [
        {
          text: "a) This is first internal sub-entry",
          subEntries: null,
          copyable: false,
          breaksIntoSpans: false,
        },
        {
          text: null,
          subEntries: [
            {
              text: "b) This is second internal sub-entry",
              subEntries: null,
              copyable: false,
              breaksIntoSpans: false,
            },
            {
              text: " but with ",
              subEntries: null,
              copyable: false,
              breaksIntoSpans: true,
            },
            {
              text: "copyable element",
              subEntries: null,
              copyable: true,
              breaksIntoSpans: true,
            },
          ],
          copyable: false,
          breaksIntoSpans: true,
        },
      ],
      copyable: false,
      breaksIntoSpans: false,
    },
    {
      text: null,
      subEntries: [
        {
          text: "This sub-entry",
          subEntries: null,
          copyable: false,
          breaksIntoSpans: false,
        },
        {
          text: " without copyable element",
          subEntries: null,
          copyable: false,
          breaksIntoSpans: true,
        },
      ],
      copyable: false,
      breaksIntoSpans: true,
    },
    {
      text: null,
      subEntries: [
        {
          text: "This is another sub-entry, but it has ",
          subEntries: null,
          copyable: false,
          breaksIntoSpans: false,
        },
        {
          text: "a copyable element",
          subEntries: null,
          copyable: true,
          breaksIntoSpans: false,
        },
      ],
      copyable: false,
      breaksIntoSpans: true,
    },
    {
      text: "This sub-entry don't have any sub-entries",
      subEntries: null,
      copyable: false,
      breaksIntoSpans: false,
    },
  ],
  copyable: false,
  breaksIntoSpans: false,
};

createServer({
  routes() {
    this.namespace = "api";
    this.get("/entry", () => res);
  },
});

function App() {
  const [response, setResponse] = React.useState<IEntry | null>(null);

  React.useEffect(() => {
    fetch("/api/entry/")
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
      });
  }, []);

  return <>{/* YOUR CODE GOES HERE */}</>;
}

export default App;
