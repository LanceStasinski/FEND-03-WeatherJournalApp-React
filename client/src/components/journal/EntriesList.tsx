import React from "react";

import { List } from "../../styles/styles";
import { Entries } from "./Journal";
import EntryItem from "./EntryItem";

const EntriesList: React.FC<{ entries: Entries }> = (props) => {
  return (
    <List>
      {props.entries.map((entry) => (
        <li key={entry._id}>
          <EntryItem entry={entry} />
        </li>
      ))}
    </List>
  );
};

export default EntriesList;
