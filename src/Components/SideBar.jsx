import {Stack} from "@mui/material";

import {categories} from "../utils/constants";

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  console.log("selectedCategory", selectedCategory);
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: "auto",
        height: {sx: "auto", md: "95%"},
        flexDirection: {md: "column"},
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className='category-btn'
          style={{
            color: "white",
            backgroundColor: selectedCategory === category.name && "#FC1503",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
              opacity: category.name === selectedCategory ? 1 : 0.8,
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
