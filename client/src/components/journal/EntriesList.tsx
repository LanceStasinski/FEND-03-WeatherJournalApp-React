import React from "react";

import { List } from "../../styles/styles";
import { Entries } from "./Journal";
import EntryItem from "./EntryItem";

const EntriesList: React.FC<{
  entries: Entries;
  onDeleteEntry: (id: string) => Promise<void>;
  onUpdateEntry: (
    subject: string,
    message: string,
    id: string,
  ) => Promise<void>;
}> = (props) => {
  return (
    <List>
      {props.entries.map((entry, index) => (
        <li key={entry._id}>
          <EntryItem
            onDeleteEntry={props.onDeleteEntry}
            onUpdateEntry={props.onUpdateEntry}
            entry={entry}
            delay={(props.entries.length - 1 - index) * 0.25}
          />
        </li>
      ))}
    </List>
  );
};

export default EntriesList;
