declare module "gmail-tester" {
  
  export interface Attachment {
    filename: string;
    data: string;
    mimeType: string;
  }
  
  export interface Email {
    from: string;
    receiver: string;
    subject: string;
    date: Date;
    body?: {
      html: string;
      text: string;
    };
    attachments: Attachment[];
  }

  export interface CheckInboxOptions {
    include_body?: boolean;
    from?: string;
    to?: string;
    subject?: string;
    before?: Date;
    after?: Date;
    wait_time_sec?: number;
    max_wait_time_sec?: number;
    label?: string;
    include_attachments: boolean;
  }

  export interface GetMessagesOptions {
    include_body?: boolean;
    from?: string;
    to?: string;
    subject?: string;
    before?: Date;
    after?: Date;
  }

  export function check_inbox(
    credentials_json: string,
    token_path: string,
    options: CheckInboxOptions
  ): Promise<Email[]>;

  export function get_messages(
    credentials_json: string,
    token_path: string,
    options: GetMessagesOptions
  ): Promise<Email[]>;

  export function refresh_access_token(
    credentials_json: string,
    token_path: string
  ): Promise<void>;
}
