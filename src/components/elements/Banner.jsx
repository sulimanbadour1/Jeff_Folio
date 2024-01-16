import "../../stylesheets/elements/Banner.css";
import jefflogo from "../../logos/svglogo.svg";
export const Banner = () => {
  return (
    <div>
      <div className="keyboard">
        <button
          className="keyboard__key keyboard__key--meta"
          type="button"
          data-key="cmd"
        >
          <span className="keyboard__key-lines">
            {/* <svg
              className="keyboard__cmd keyboard__key-line--tr"
              viewBox="0 0 16 16"
              width="16px"
              height="16px"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="currentcolor"
                stroke-width="2"
                d="M5.7,10.3v2.3c0,1.3-1,2.3-2.3,2.3S1,14,1,12.7s1-2.3,2.3-2.3H5.7z M5.7,10.3h4.7 M5.7,10.3V5.7M10.3,10.3v2.3c0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3s-1-2.3-2.3-2.3H10.3z M10.3,10.3V5.7 M10.3,5.7H5.7 M10.3,5.7V3.3c0-1.3,1-2.3,2.3-2.3S15,2,15,3.3s-1,2.3-2.3,2.3H10.3z M5.7,5.7V3.3C5.7,2,4.6,1,3.3,1S1,2,1,3.3s1,2.3,2.3,2.3H5.7z"
              />
            </svg> */}

            <img
              src={jefflogo}
              className="keyboard__cmd keyboard__key-line--tr"
              alt="logo"
            />
            <small className="keyboard__key-line keyboard__key-line--small keyboard__key-line--br">
              command
            </small>
          </span>
        </button>
        <button className="keyboard__key" type="button" data-key="c">
          <span className="keyboard__key-lines">
            <span className="keyboard__key-line">M</span>
          </span>
        </button>
        <button className="keyboard__key" type="button" data-key="v">
          <span className="keyboard__key-lines">
            <span className="keyboard__key-line">L</span>
          </span>
        </button>
      </div>
    </div>
  );
};
