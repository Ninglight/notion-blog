export class NotionApi {
  static basepath = process.env.NOTION_BASEPATH;
  static token = process.env.NOTION_TOKEN;

  static async getPage(pageId: string) {
    return NotionApi.get(`${this.basepath}pages/${pageId}`);
  }

  static async getBlock(pageId: string) {
    return NotionApi.get(`${this.basepath}blocks/${pageId}`);
  }

  static async getBlockChildren(pageId: string) {
    return NotionApi.get(`${this.basepath}blocks/${pageId}/children?page_size=200`);
  }

  static async get(url: string) {
    return fetch(url, NotionApi.getRequestInit('GET'))
      .then(res => res.json()) 
      .catch((error) => {
        throw new Error(error)
      })
  }

  static getRequestInit(method: 'GET' | 'POST'): RequestInit {
    return {
      method: method,
      headers: {
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        'mode': 'no-cors',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
        'Authorization': `Bearer ${this.token}`,
      }
    }
  }
}