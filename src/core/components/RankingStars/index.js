import React from "react";
import Grade from "@material-ui/icons/Grade";
import Button from "@material-ui/core/Button";
import useStyle from "./style";

export default function RankingStars(props) {
  const { onMark, mode = "display", value = 0 } = props;
  const classes = useStyle();
  const ranking = [1, 2, 3, 4, 5];
  const isDisplay = mode === "display";
  return (
    <div className={classes.container}>
      {ranking.map(id => {
        return (
          <Button
            size="small"
            key={id}
            onClick={() => onMark(id)}
            disabled={isDisplay}
          >
            <Grade
              className={`${
                value && value >= id ? classes.mark : classes.unmark
              }`}
            />
          </Button>
        );
      })}
    </div>
  );
}
