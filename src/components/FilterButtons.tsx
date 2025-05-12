
import React from 'react';
import styled from 'styled-components';

interface FilterButtonsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const Button = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: none;
  background-color: ${({ active }) => (active ? '#0070f3' : '#e0e0e0')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) =>
      active ? '#005bb5' : '#d5d5d5'};
  }
`;

const FilterButtons: React.FC<FilterButtonsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <ButtonGroup>
      {categories.map((category) => (
        <Button
          key={category}
          active={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterButtons;
