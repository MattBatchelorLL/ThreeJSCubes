import * as THREE from "/build/three.module.js";
import { OrbitControls } from "/jsm/controls/OrbitControls.js";
import Stats from "/jsm/libs/stats.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

//=========================================================
//Creating a cube (LEFT)

//Define vertices
const verticesOne = [
  // front
  { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0], color: [1,1,1] },
  { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], color: [1,1,1]  },
  { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], color: [1,1,1]  },

  { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], color: [1,1,1]  },
  { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], color: [1,1,1]  },
  { pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1], color: [1,1,1]  },
  // right
  { pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0], color: [1,0,0]  },
  { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], color: [1,0,0]   },
  { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], color: [1,0,0]   },

  { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], color: [1,0,0]   },
  { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], color: [1,0,0]   },
  { pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1], color: [1,0,0]   },
  // back
  { pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0], color: [0,1,0]   },
  { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], color: [0,1,0] },
  { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], color: [0,1,0] },

  { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], color: [0,1,0] },
  { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], color: [0,1,0] },
  { pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1], color: [0,1,0] },
  // left
  { pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0], color: [0,0,1] },
  { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], color: [0,0,1]  },
  { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], color: [0,0,1]  },

  { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], color: [0,0,1]  },
  { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], color: [0,0,1]  },
  { pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1], color: [0,0,1]  },
  // top
  { pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0], color: [1,0,1]  },
  { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], color: [1,0,1]   },
  { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], color: [1,0,1]   },

  { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], color: [1,0,1]   },
  { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], color: [1,0,1]   },
  { pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1], color: [1,0,1]   },
  // bottom
  { pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0], color: [1,1,0]   },
  { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], color: [1,1,0]    },
  { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], color: [1,1,0]    },

  { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], color: [1,1,0]    },
  { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], color: [1,1,0]   },
  { pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1], color: [1,1,0]    }
];

const positionsOne = [];
const normalsOne = [];
const uvsOne = [];
const colorsOne = [];
for (const vertex of verticesOne) {
  positionsOne.push(...vertex.pos);
  normalsOne.push(...vertex.norm);
  uvsOne.push(...vertex.uv);
  colorsOne.push(...vertex.color)
}

const geometryOne = new THREE.BufferGeometry();
const positionNumComponents = 3;
const normalNumComponents = 3;
const uvNumComponents = 2;
geometryOne.setAttribute(
  "position",
  new THREE.BufferAttribute(
    new Float32Array(positionsOne),
    positionNumComponents
  )
);
geometryOne.setAttribute(
  "normal",
  new THREE.BufferAttribute(new Float32Array(normalsOne), normalNumComponents)
);
geometryOne.setAttribute(
  "uv",
  new THREE.BufferAttribute(new Float32Array(uvsOne), uvNumComponents)
);

const material = new THREE.MeshBasicMaterial({ wireframe: true });
const cubeOne = new THREE.Mesh(geometryOne, material);
cubeOne.position.x = -5;
scene.add(cubeOne);

//=========================================================
//Making the same cube while reusing vertices (RIGHT)

//Defines the 26 unique vertices
const verticesTwo = [
  // front
  { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0], color: [1,0,0] }, // 0
  { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], color: [1,1,0] }, // 1
  { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], color: [1,0,1] }, // 2
  { pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1], color: [1,0,0] }, // 3
  // right
  { pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0], color: [0,0,0] }, // 4
  { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], color: [0,1,0] }, // 5
  { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], color: [0,1,0] }, // 6
  { pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1], color: [0,1,1] }, // 7
  // back
  { pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0], color: [0,0,0] }, // 8
  { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], color: [0.5,0,0] }, // 9
  { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], color: [0,0.5,0] }, // 10
  { pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1], color: [0,0,0.5] }, // 11
  // left
  { pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0], color: [0,0.5,0] }, // 12
  { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], color: [0.5,0,0.5] }, // 13
  { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], color: [1,0.5,0] }, // 14
  { pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1], color: [1,0,0] }, // 15
  // top
  { pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0], color: [0.2,0.2,0.2] }, // 16
  { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], color: [0,0.4,0] }, // 17
  { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], color: [0.6,0.7,0] }, // 18
  { pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1], color: [0.3,0.3,0] }, // 19
  // bottom
  { pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0], color: [0,1,0] }, // 20
  { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], color: [0,0,1] }, // 21
  { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], color: [1,0,0] }, // 22
  { pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1], color: [1,0.5,0] } // 23
];

const positionsTwo = [];
const normalsTwo = [];
const uvsTwo = [];
const colorsTwo = [];
for (const vertex of verticesTwo) {
  positionsTwo.push(...vertex.pos);
  normalsTwo.push(...vertex.norm);
  uvsTwo.push(...vertex.uv);
  colorsTwo.push(...vertex.color);
}

const geometryTwo = new THREE.BufferGeometry();
geometryTwo.setAttribute(
  "position",
  new THREE.BufferAttribute(
    new Float32Array(positionsTwo),
    positionNumComponents
  )
);
geometryTwo.setAttribute(
  "normal",
  new THREE.BufferAttribute(new Float32Array(normalsTwo), normalNumComponents)
);
geometryTwo.setAttribute(
  "uv",
  new THREE.BufferAttribute(new Float32Array(uvsTwo), uvNumComponents)
);
geometryTwo.setAttribute(
  "color",
  new THREE.BufferAttribute(new Float32Array(colorsTwo), positionNumComponents)
)

//Specifies the 36 indices needed to draw each triangle (to reuse vertices)
geometryTwo.setIndex([
  0,
  1,
  2,
  2,
  1,
  3, // front
  4,
  5,
  6,
  6,
  5,
  7, // right
  8,
  9,
  10,
  10,
  9,
  11, // back
  12,
  13,
  14,
  14,
  13,
  15, // left
  16,
  17,
  18,
  18,
  17,
  19, // top
  20,
  21,
  22,
  22,
  21,
  23 // bottom
]);

//Creating cube with reused vertices, not using colours
const materialTwo = new THREE.MeshBasicMaterial({ wireframe: true });
const cubeTwo = new THREE.Mesh(geometryTwo, materialTwo);
cubeTwo.position.x = -2;
scene.add(cubeTwo);

//Creating cube with vertice colours from buffer attribute by setting vertexColors in the material
const materialThree = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors, wireframe: true})
const cubeThree = new THREE.Mesh(geometryTwo, materialThree);
cubeThree.position.x = 1;
scene.add(cubeThree);

//Creating a fourth cube with 'cell' colour values
const geometryFour = new THREE.BufferGeometry();
geometryFour.setAttribute(
  "position",
  new THREE.BufferAttribute(
    new Float32Array(positionsOne),
    positionNumComponents
  )
);
geometryFour.setAttribute(
  "normal",
  new THREE.BufferAttribute(new Float32Array(normalsOne), normalNumComponents)
);
geometryFour.setAttribute(
  "uv",
  new THREE.BufferAttribute(new Float32Array(uvsOne), uvNumComponents)
);
geometryFour.setAttribute(
  "color",
  new THREE.BufferAttribute(new Float32Array(colorsOne), positionNumComponents)
)
//Get access to faces
const materialFour = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors, wireframe: false})
const cubeFour = new THREE.Mesh(geometryFour, materialFour)
cubeFour.position.x = 4;
scene.add(cubeFour);


window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  },
  false
);

const stats = Stats();
document.body.appendChild(stats.dom);

var animate = function () {
  requestAnimationFrame(animate);
  cubeOne.rotation.x += 0.001;
  cubeOne.rotation.y += 0.001;
  cubeTwo.rotation.x += 0.001;
  cubeTwo.rotation.y += 0.001;
  cubeThree.rotation.x += 0.001;
  cubeThree.rotation.y += 0.001;
  cubeFour.rotation.x += 0.001;
  cubeFour.rotation.y += 0.001;
  controls.update();
  render();
  stats.update();
};

function render() {
  renderer.render(scene, camera);
}

animate();
