import { gsap } from "../node_modules/gsap/all.js";

import { ScrambleTextPlugin } from "../node_modules/gsap-trial/ScrambleTextPlugin.js";

gsap.registerPlugin(ScrambleTextPlugin);
var tl = gsap.timeline({defaults: {duration: 2, ease: "none"}});

tl.to("#scramble", {duration: 1, scrambleText:{text:"Développeur Web"}})