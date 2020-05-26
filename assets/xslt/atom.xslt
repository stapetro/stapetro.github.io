---
layout: xml-style
title: "Atom Feed (Styled)"
sitemap:
  exclude: true
rootMatcher: '/atom:feed'
stylesheetAttributes: 'xmlns:atom="http://www.w3.org/2005/Atom"'
disclaimer: 'This <a href="https://en.wikipedia.org/wiki/RSS" target="_blank" rel="noopener">Atom feed</a> is meant to be used by <a href="https://en.wikipedia.org/wiki/Template:Aggregators" target="_blank" rel="noopener">RSS reader applications and websites</a>.'
lang: en
lang-ref: feed-atom
---
<div class="grid-x grid-padding-x align-center">
<header class="cell large-8">
	<p class="subheadline"><xsl:value-of select="atom:subtitle" disable-output-escaping="yes" /></p>
	<h1>
		<xsl:element name="a">
			<xsl:attribute name="href">
				<xsl:value-of select="atom:id" />
			</xsl:attribute>
			<xsl:value-of select="atom:title" />
		</xsl:element>
	</h1>
</header>
<ul class="cell large-8 accordion" data-accordion="" data-allow-all-closed="true">
	<xsl:for-each select="atom:entry">
		<li class="accordion-item" data-accordion-item="">
			<xsl:variable name="slug-id">
				<xsl:call-template name="slugify">
					<xsl:with-param name="text" select="atom:id" />
				</xsl:call-template>
			</xsl:variable>
			<xsl:element name="a">
				<xsl:attribute name="class"><xsl:text>accordion-title</xsl:text></xsl:attribute>
				<xsl:attribute name="href"><xsl:value-of select="concat('#', $slug-id)"/></xsl:attribute>
				<xsl:value-of select="atom:title"/>
				<br/>
				<small><xsl:value-of select="atom:updated"/></small>
			</xsl:element>
			<xsl:element name="div">
				<xsl:attribute name="id"><xsl:value-of select="$slug-id"/></xsl:attribute>
				<xsl:attribute name="data-tab-content" />
				<xsl:attribute name="class"><xsl:text>accordion-content</xsl:text></xsl:attribute>
				<h1>
					<xsl:element name="a">
						<xsl:attribute name="href"><xsl:value-of select="atom:id"/></xsl:attribute>
						<xsl:value-of select="atom:title"/>
					</xsl:element>
				</h1>
				<xsl:value-of select="atom:content" disable-output-escaping="yes" />
			</xsl:element>
		</li>
	</xsl:for-each>
</ul>
</div>
