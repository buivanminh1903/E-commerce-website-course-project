export interface CommentsModelServer {
  id: number;
  displayname: string;
  gender: string;
  ngaytao: Date;
  noidung: string;
  recommend: string;
  adminreply: string;
  sodienthoai: string;
  requestRemoveComment: string;
}

export interface ServerResponse {
  count: number;
  comments: CommentsModelServer[];
}
