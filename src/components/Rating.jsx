function Rating({ rating }) {
  return (
    <>
      <svg display="none">
        <defs>
          <symbol id="fivestars">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151zM0 0h24v24H0V0"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151zM0 0h24v24H0V0"
              transform="translate(24)"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151zM0 0h24v24H0V0"
              transform="translate(48)"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151zM0 0h24v24H0V0"
              transform="translate(72)"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151zM0 0h24v24H0V0"
              transform="translate(96)"
            ></path>
          </symbol>
        </defs>
      </svg>
      <div className="rating">
        <progress className="rating-bg" value={rating} max="5"></progress>
        <svg>
          <use href="#fivestars" />
        </svg>
      </div>
    </>
  );
}

export default Rating;
