import React, { useState, useImperativeHandle } from 'react';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({repoList}) => {

    return (
    <div className="div-result">
            {repoList.map((repo) => (
                <RepositoryItem key={repo.id} data={repo}>
                </RepositoryItem>
            ))}
    </div>
    );
  };
export default RepositoryList;
