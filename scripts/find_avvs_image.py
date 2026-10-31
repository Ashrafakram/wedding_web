import urllib.request
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}
url = 'https://www.google.com/search?q=avvs+hall+ammapettai+salem+images&udm=2'
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https://encrypted-tbn0\.gstatic\.com/images\?q=tbn:[^\s"\'\\]+', html)
        print(f"Total images found: {len(matches)}")
        for idx, m in enumerate(matches[:15]):
            print(f"[{idx}] {m}")
            # download first few to inspect
            if idx < 5:
                dest = f"public/assets/avvs_google_{idx}.jpg"
                try:
                    urllib.request.urlretrieve(m, dest)
                    print(f"Saved to {dest}")
                except Exception as ex:
                    print(f"Failed to save {idx}: {ex}")
except Exception as e:
    print(f"Error: {e}")
