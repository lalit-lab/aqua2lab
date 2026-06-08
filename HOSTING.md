# Hosting Aqua2 Lab on your Laptop

Your "Ultra Premium" Next.js website is ready! To host it permanently on your laptop for free, follow these steps:

## 1. Start the Website in the Background
We use **PM2** to keep your website running even if you close the terminal or if it crashes.

1.  Open **PowerShell** as Administrator.
2.  Navigate to your project: `cd C:\Users\Asus\aqua2-lab`
3.  Start the app: `pm2 start ecosystem.config.js`
4.  Save the process list: `pm2 save`
5.  (Optional) To make it start when windows boots, you can use `pm2-windows-startup`:
    *   `npm install -g pm2-windows-startup`
    *   `pm2-startup install`

## 2. Set up the Secure Tunnel (Cloudflare)
This will connect your domain to your laptop securely.

1.  **Download Cloudflare:** [Download cloudflared for Windows](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi) and install it.
2.  **Login:** In PowerShell, run:
    `cloudflared tunnel login`
    *   This will open a browser. Log in to your Cloudflare account and select your domain.
3.  **Create a Tunnel:**
    `cloudflared tunnel create aqua2lab-tunnel`
    *   This will give you a **Tunnel ID**. Copy it.
4.  **Configure the Tunnel:** Create a file named `config.yml` in `%USERPROFILE%\.cloudflared\` with this content:
    ```yaml
    url: http://localhost:3000
    tunnel: <YOUR-TUNNEL-ID>
    credentials-file: C:\Users\Asus\.cloudflared\<YOUR-TUNNEL-ID>.json

    ingress:
      - hostname: aqua2lab.com  # Replace with your actual domain
        service: http://localhost:3000
      - service: http_status:404
    ```
5.  **Route the DNS:**
    `cloudflared tunnel route dns aqua2lab-tunnel aqua2lab.com`
6.  **Run as a Service:**
    `cloudflared service install`
    `Start-Service cloudflared`

## 3. Maintenance
*   To see the website logs: `pm2 logs aqua2lab-website`
*   To restart the website: `pm2 restart aqua2lab-website`
*   To stop the website: `pm2 stop aqua2lab-website`

Your website will now be live at `https://aqua2lab.com` (or your domain) as long as your laptop is on!
