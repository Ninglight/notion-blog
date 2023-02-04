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
    return NotionApi.get(`${this.basepath}blocks/${pageId}/children?page_size=100`);
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
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${this.token}`,
      }
    }
  }
}