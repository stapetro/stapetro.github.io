---
layout: xml-style
title: "RSS Feed (Styled)"
sitemap:
  exclude: true
rootMatcher: '/rss'
disclaimer: 'This <a href="https://en.wikipedia.org/wiki/RSS" target="_blank" rel="noopener">RSS feed</a> is meant to be used by <a href="https://en.wikipedia.org/wiki/Template:Aggregators" target="_blank" rel="noopener">RSS reader applications and websites</a>.'
lang: en
lang-ref: feed-rss
---
<div class="grid-x grid-padding-x align-center">
<header class="cell large-8">
	<p class="subheadline"><xsl:value-of select="channel/description" disable-output-escaping="yes" /></p>
	<h1>
		<xsl:element name="a">
			<xsl:attribute name="href">
				<xsl:value-of select="channel/link" />
			</xsl:attribute>
			<xsl:value-of select="channel/title" disable-output-escaping="yes" />
		</xsl:element>
	</h1>
</header>
<ul class="cell large-8 accordion" data-accordion="" data-allow-all-closed="true">
	<xsl:for-each select="channel/item">
		<li class="accordion-item" data-accordion-item="">
			<xsl:variable name="slug-id">
				<xsl:call-template name="slugify">
					<xsl:with-param name="text" select="guid" />
				</xsl:call-template>
			</xsl:variable>
			<xsl:element name="a">
				<xsl:attribute name="class"><xsl:text>accordion-title</xsl:text></xsl:attribute>
				<xsl:attribute name="href"><xsl:value-of select="concat('#', $slug-id)"/></xsl:attribute>
				<xsl:value-of select="title"/>
				<br/>
				<small><xsl:value-of select="pubDate"/></small>
			</xsl:element>
			<xsl:element name="div">
				<xsl:attribute name="id"><xsl:value-of select="$slug-id"/></xsl:attribute>
				<xsl:attribute name="data-tab-content" />
				<xsl:attribute name="class"><xsl:text>accordion-content</xsl:text></xsl:attribute>
				<h1>
					<xsl:element name="a">
						<xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
						<xsl:value-of select="title"/>
					</xsl:element>
				</h1>
				<xsl:value-of select="description" disable-output-escaping="yes" />
			</xsl:element>
		</li>
	</xsl:for-each>
</ul>
</div>
