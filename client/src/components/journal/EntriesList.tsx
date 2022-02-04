import React from "react";

import { List } from "../../styles/styles";
import { Entries } from "./Journal";
import EntryItem from "./EntryItem";

const EntriesList: React.FC<{ entries: Entries }> = (props) => {
  return (
    <List>
      {props.entries.map((entry, index) => (
        <li key={entry._id}>
          <EntryItem entry={entry} delay={0.25 * index}/>
        </li>
      ))}
    </List>
  );
};

export default EntriesList;
