import React from "react";

const College = ({ college: { name, logo, tags } }) => {
  return (
    <div class="media text-muted p-3 border border-black">
      <div>
        
      </div>
      <div class="media-body ml-3 text-dark">
        <h4>{name}</h4>
        <ul class="nav nav-list">
          {tags.length !==0 && tags.map(tag => (
              <li>{tag.approvedBy}</li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};

export default College;
