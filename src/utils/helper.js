export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/nopriority.svg`}
          color="#797d84"
          size={14}
        />
      );
    case "Low":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/lowpriority.svg`}
          color="#797d84"
          size={14}
        />
      );
    case "Medium":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/mediumpriority.svg`}
          color="#797d84"
          size={14}
        />
      );
    case "High":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/highpriority.svg`}
          color="#797d84"
          size={14}
        />
      );
    case "Urgent":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/urgentpriority.svg`}
          color="#797d84"
          size={14}
        />
      );
    default:
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/nopriority.svg`}
          color="#797d84"
          size={14}
        />
      );
  }
};

export const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/Backlog.svg`}
          color="#797d84"
          size={14}
        />
      );
    case "Todo":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/To-Do.svg`}
          color="#797d84"
          size={14}
        />
      );
    case "In progress":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/in-progress.svg`}
          color="#797d84"
          size={14}
        />
      );
    case "Done":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/Done.svg`}
          color="#797d84"
          size={14}
        />
      );
    case "Canceled":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/Cancelled.svg`}
          color="#797d84"
          size={14}
        />
      );
    default:
      return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/Cancelled.svg`}
          color="#797d84"
          size={14}
        />
      );
  }
};
