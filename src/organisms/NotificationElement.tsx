import { ErrorElementProps } from "../types/OrganismsTypes";

const NotificationElement = ({ text }: ErrorElementProps ) => {
  return (
    <div className="bg-indigo-300">
      <h1>{text}</h1>
    </div>
  );
}

export default NotificationElement;