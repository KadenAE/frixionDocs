---
id: firewall-shutter-logger
title: Firewall Shutter Logger
sidebar_position: 1
---

# Firewall Shutter Logger

The **Firewall Shutter Logger** is a tool that automatically logs shutter usage in your game. This helps identify potential abuse or misuse of the shutter system.

---

## 📦 Getting Started

### Step 1: Retrieve the Product

1. Join our official Discord server.
2. Run the command:  
   ```
   /retrieve Firewall Shutter Logger
   ```
3. You'll receive a direct message with a download link for the product.

---

### Step 2: Add the Product to Your Game

1. Download the file from the link provided in the Discord DM.
2. Open your Roblox Studio project.
3. Right-click on the **Workspace** in the Explorer panel and select **Upload from File**.
4. Once uploaded, move the model into **ServerScriptService**.

---

### Step 3: Enable HTTP Requests

The logger sends data to remote servers (e.g., Discord webhooks), so HTTP requests must be enabled:

1. In Roblox Studio, open **Game Settings**.
2. Navigate to the **Security** tab.
3. Enable **Allow HTTP Requests**.

---

## ⚙️ Configuration

### 🔗 Connect a Discord Webhook

1. Open your Discord server and navigate to the desired log channel.
2. Click the gear icon to edit the channel, then go to **Integrations** > **Webhooks**.
3. Click **Create Webhook** and customize it as desired.
4. Copy the **Webhook URL**.
5. Paste this URL into the designated area of the logger’s configuration script.

---

### 🎨 Embed Colour

- You can customize the embed color by using any valid **hex color code**.
- Example: `#FF5733` for an orange-red tone.

---

### 🛡️ Group Configuration

- **ShowGroupRank**:  
  Set to `true` if you want the player's group rank to be displayed in the Discord embed.

- **GroupID**:  
  If `ShowGroupRank` is enabled, specify your Roblox **Group ID** here.

---

### 🗺️ Zones

You can optionally name each shutter zone for better identification in the logs.

- Format:
  ```lua
  [Zone Number] = "Zone Name";
  ```

- Example:
  ```lua
  [1] = "Break Room";
  [2] = "Main Hall";
  ```

#### Notes:

- If you have **less than 10 zones**, you may safely delete the unused entries.
- If you have **more than 10 zones**, simply continue the numbering using the same format.

---

## 🛠️ Assistance

If you still require assistance, open a ticket on our [Discord server](https://example.com).