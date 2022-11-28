const DropdownMenu = (props) => {
  const { top, left } = props;

  return (
    <span
      style={{ display: "flex",
               flexDirection: "column",
               position: "absolute",
               top: `${top + 5}px`,
               left: `${left + 5}px`
            }}
      className="dropdown-menu"
    >
      <button>Mine Guy</button>
      <button>Polar Bear</button>
      <button>Tiny Castle</button>
    </span>
  );
};

export default DropdownMenu;
