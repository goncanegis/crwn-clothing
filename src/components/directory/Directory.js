import React from 'react';
import categories from '../../data/categories.json';
import CategoryItem from '../category-item/CategoryItem';
import './Directory.scss';

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
