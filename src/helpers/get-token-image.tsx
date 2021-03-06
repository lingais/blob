import BlobImg from "../assets/tokens/BLOB.png";
import MemoImg from "../assets/tokens/MEMO.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}
 
export function getTokenUrl(name: string) {
    if (name === "blob") {
        return toUrl(BlobImg);
    }

    if (name === "sblob") {
        return toUrl(MemoImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
