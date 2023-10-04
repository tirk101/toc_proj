
export type Id = string | number;

export type Board = {
id: String;
tileId: String;
tileType: String;
};  

export type StraightTile = {
id: string;
boardId: string;
content: string;
tileType: string;
};

export type LeftCorner = {
id: string;
boardId: string;
content: string;
tileType: string;
};

export type RightCorner = {
id: string;
boardId: string;
content: string;
tileType: string;
};

export type Deadend = {
id: string;
boardId: string;
content: string;
tileType: string;
};

export type Oneway = {
id: string;
boardId: string;
content: string;
tileType: string;
};

export type Tway = {
id: string;
boardId: string;
content: string;
tileType: string;
};

export type Player = {
id: string;
boardId: string;
content: string;
tileType: string;
};