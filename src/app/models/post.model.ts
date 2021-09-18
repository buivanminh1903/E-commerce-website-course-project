export interface PostModelServer {
    id: number;
    tieude: string;
    hinhanh: string;
    thoigian: string;
    tacgia: number;
    doanvanso1: string;
}

export interface ServerResponse {
    count: number;
    post: PostModelServer[];
}