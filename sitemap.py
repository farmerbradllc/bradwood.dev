import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from xml.etree.ElementTree import Element, SubElement, ElementTree
import os

def crawl_website(base_url, visited=None):
    """
    Crawls a website and returns all unique URLs.
    """
    if visited is None:
        visited = set()
    
    try:
        response = requests.get(base_url, timeout=10)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error crawling {base_url}: {e}")
        return visited

    soup = BeautifulSoup(response.text, 'html.parser')
    visited.add(base_url)

    for link in soup.find_all('a', href=True):
        url = urljoin(base_url, link['href'])
        parsed_url = urlparse(url)
        
        # Ensure the URL is within the same domain and not already visited
        if parsed_url.netloc == urlparse(base_url).netloc and url not in visited:
            visited = crawl_website(url, visited)
    
    return visited

def generate_sitemap(domain, urls):
    """
    Generates a sitemap XML file for a given domain and URLs.
    """
    # Get the absolute path to the 'sitemaps' directory
    output_dir = os.path.abspath("./public/sitemaps")
    os.makedirs(output_dir, exist_ok=True)  # Create directory if it doesn't exist

    # Create a filename for the sitemap
    filename = os.path.join(output_dir, f"sitemap_{domain.replace('https://', '').replace('.', '_')}.xml")
    
    urlset = Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    for url in sorted(urls):
        url_element = SubElement(urlset, "url")
        loc = SubElement(url_element, "loc")
        loc.text = url

    try:
        with open(filename, "wb") as f:
            tree = ElementTree(urlset)
            tree.write(f)
        print(f"Sitemap saved as {filename}")
    except Exception as e:
        print(f"Error saving sitemap for {domain}: {e}")
    return filename

def generate_master_sitemap(domain, sitemap_files):
    """
    Combines multiple sitemap files into a master sitemap index.
    """
    sitemap_index = Element("sitemapindex", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    for sitemap_file in sitemap_files:
        sitemap_element = SubElement(sitemap_index, "sitemap")
        loc = SubElement(sitemap_element, "loc")
        loc.text = f"https://{domain}/{os.path.basename(sitemap_file)}"
    
    with open("sitemap_master.xml", "wb") as f:
        tree = ElementTree(sitemap_index)
        tree.write(f)
    print("Master sitemap saved as sitemap_master.xml")

def main():
    # Define your main domain and subdomains
    domains = [
        "https://bradwood.dev",
        "https://todo.bradwood.dev",
        "https://passwords.bradwood.dev",
        "https://dns-lookup.bradwood.dev"  # Add other subdomains here
    ]

    sitemap_files = []
    
    for domain in domains:
        print(f"Generating sitemap for {domain}...")
        urls = crawl_website(domain)
        sitemap_file = generate_sitemap(domain, urls)
        sitemap_files.append(sitemap_file)
    
    # Generate a master sitemap
    generate_master_sitemap("bradwood.dev", sitemap_files)

if __name__ == "__main__":
    main()
