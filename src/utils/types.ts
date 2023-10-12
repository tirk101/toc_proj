
export type Id = string | number;

export type Board = {
id: String;
tileId: String;
tileType: String;
};  

export type StraightTile = {
id: string;
boardId: string;
direction: string;
path:string[],
tileType: string;
};

export type Corner = {
id: string;
boardId: string;
direction: string;
path:string[],
tileType: string;
};



export type Deadend = {
id: string;
boardId: string;
direction: string;
path:string[],
tileType: string;
};

export type Oneway = {
id: string;
boardId: string;
direction: string;
path:string[],
tileType: string;
};

export type Tway = {
id: string;
boardId: string;
direction: string;
path:string[],
tileType: string;
};


export type Defaulttile = {
id: string;
boardId: string;
content: string;
tileType: string;
};

export type Player = {
id: string;
boardId: string;
direction: string;
tileType: string;
};

export type Finishline = {
id: string;
boardId: string;
direction: string;
path:string[];
tileType: string;
};
