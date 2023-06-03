# WebGL Tetris!

## Get Started

**Opening `index.html` directly from file system will *NOT* work!**

### Build from Source

Alternatively, you can build from source. This requires you to have `node` and `npm` installed.

```
$ npm install
$ npm run build
```

Then, please set up a simple HTTP server on localhost:

```
$ cd build
$ python3 -m http.server
```

Open your browser and navigate to [http://localhost:8000](http://localhost:8000).

Or, run

```
$ npm install
$ npm run dev
```

to start a Webpack local development server on [http://localhost:8080](http://localhost:8080).

## Features

In addition to required features, efforts are put into followings,
- an Unity3D-like scripting runtime API, with classes `AssetManager`, `Behavior`, `Color`, `Component`, `Game`, `GameObject`, `Mesh`, `Renderer`, `Transform`, and `Vector2`, located under `src/runtime`.
	- `AssetManager`: loads remote assets asynchronously
	- `GameObject`:  servers multiple purposes by attaching with different `Component` classes, which inherent from:
		- `Behavior`: provides `onStart`, `onUpdate`, `onLateUpdate`, `onFixedUpdate` scripting interfaces
		- `Mesh`: defines vertices and faces for that will be passed to shaders, converts local `Transforms` to WebGL clip coordinates
		- `Renderer`: takes vertices positions from a `Mesh` and populate WebGL buffers, executes shaders
		- `Transform`: defines relative transformation to its parent, supports position, scaling, the rotation, `GameObject`s with their transforms being decedents of `Game.world.transform` would be rendered.
	- `Color`: defines an `RGBA` color.
	- `Vector2`: represents a 2D vector with algebra functions.
	- This runtime is theoretically sufficient for any 2D presentation.
- an FPS counter
- display of current game information:
	- game state: `GameLogic.STATES.READY`, `GameLogic.STATES.PLAYING`, or `GameLogic.STATES.GAME_OVER`
	- preview of next tile, and the name
- scores: current and high score
- alternative tile falling mode: discrete or continuous
- adjustable falling velocity
- a button to start/restart the game

