export interface CommentCardProps {
     name: string;
     date: Date | string;
     content: string;
     imageUrl: string;
     isReply?: boolean;
}
