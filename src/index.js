import "./style.css";
import controller from "./controller/controller";
import view from "./view/view";

const userIdx = "0";
view.init(controller.getInitParams());
